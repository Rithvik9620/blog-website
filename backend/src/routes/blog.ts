import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { sign, verify } from 'hono/jwt'
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlogInput, updateBlogInput } from "@rithvik9620/medium-common";

export const blogRouter = new Hono<{
    Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	},
    Variables:{
        userId: string
    }
}>();

blogRouter.use('/*',async (c,next)=>{
    const token = c.req.header("authorization") || "";
    const user = await verify(token,c.env.JWT_SECRET);
    if(user){
        c.set("userId",user.id);
        await next();
    }
    else{
      c.status(403);
      return c.json({error:"invalid user"});
    }
  })
  
  blogRouter.post('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"Incorrect inputs"  
      })
    }
    const authorId = c.get("userId");
    const blog = await prisma.post.create({
        data:{
            title:body.title,
            content:body.content,
            authorId:Number(authorId)
        }
    })
    return c.json({
        id:blog.id
    })
  })
  
  blogRouter.put('/',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message:"Incorrect inputs"  
      })
    }
    const authorId = c.get("userId");
    const blog = await prisma.post.update({
        where:{
            id:Number(authorId)
        },
        data:{
            title:body.title,
            content:body.content,
        }
    })
    return c.json({
        id:blog.id
    })
  })

  blogRouter.get('/bulk',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany();
    return c.json({
        blogs
    })
  })
  
  blogRouter.get('/:id',async (c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = c.req.param("id");
    try{
        const blog = await prisma.post.findFirst({
            where:{
                id:Number(id)
            }
        })
        return c.json({
            blog
        })
    }catch(err){
        c.status(411);
        return c.text('Error while fetching blog')
    }
    
  })
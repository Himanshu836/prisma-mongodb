import prisma from "../DB/DBconfig.js";

export const store=async(req,res)=>{
    const {Teacher_Name,Address,salary,subjectID} = req.body
    const Teacher_Details = await prisma.teacher.create({
        data:{Teacher_Name,Address,salary,subjectID}
    })
    return res.json({status:200,Teacher_Details,message:"Teacher_Detail stored successfully"})
}

export const index = async(req,res)=>{
    const allDataofTeachers = await prisma.teacher.findMany({
        include:{subject:{
            select:{Subject_Name:true}
        }}
    })
    return res.json({status:201,allDataofTeachers,message:"Data fetched"})
}

export const update=async(req,res)=>{
    const {id}=req.params
    const {Teacher_Name,Address,salary} = req.body
    const updatedData= await prisma.teacher.update({
        data:{Teacher_Name,Address,salary},where:{id}
    })
    return res.json({status:201,updatedData,message:"success"})
}

export const destroy = async(req,res)=>{
    const {id} =req.params
    const deletedUser = await prisma.teacher.delete({where:{id}})
    return res.json({status:201,deletedUser,message:"Deleted successfully"})
}
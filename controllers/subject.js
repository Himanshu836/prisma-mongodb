import prisma from "../DB/DBconfig.js";

export const store = async(req,res)=>{
    const {Subject_Name,Teacher_name} = req.body
    const subject = await prisma.subject.create({
        data:{
            Subject_Name,Teacher_name
        }
    })
    return res.json({status:200,subject,message:"subject added successfully"})
}

export const index = async (req,res)=>{
    const subjects = await prisma.subject.findMany({
        // select:{Subject_Name:true,id:true,Teacher_name:true}
        include:{
            Teacher:{
                select:{
                    Address:true,salary:true
                }
            }
        }
    })
    return res.json({status:200,subjects})
}

export const update=async(req,res)=>{
    const {id} = req.params
    const {Name,Teacher_name} = req.body
    await prisma.subject.update({
        data:{
            Name,Teacher_name
        },where :{id}
    })
    return res.json({status:200,message:"subject details updated successfully"})
}

export const destroy= async(req,res)=>{
    const {id}=req.params
    await prisma.subject.delete({where:{id}})
    return res.json({status:"success",message:"subject deleted successfully"})
}
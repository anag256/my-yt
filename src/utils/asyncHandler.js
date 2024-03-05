const asyncHandler=(requestHandler)=>{
   return (req,res,next)=>{
        Promise.resolve(requestHandler).catch((err)=>next(err))
    }
}

export {asyncHandler}

//higher order function that takes a fn and return a fn
// const asyncHandler=(fn)=> async (req,res,next)=>{
//     try{
//         await fn(req,res,next);
//     }
//     catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }
import Flush from "../models/flush.model.js";



export const getNextWeekFlush = async (req,res) =>{

    const {id} = req.body

    const flush = await Flush.findAll({
     where: {
        user_id: id
     }
    });

    console.log(flush)

    let sumaMontos = 0;

    flush.forEach((elemento) => {
      sumaMontos += elemento.dataValues.amount;
    });
    
    const promedio = sumaMontos


   res.json(promedio)
};


import { db } from "../db.js";


export const getLogin = (req, res) => {
    const query="select admin_id from admin_users where mobile =? AND pwd=?"
  //  const query="SELECT *,DATE_FORMAT(dob,'%Y-%m-%d')AS dob2 FROM student WHERE id = ?"
    //const student_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })  
}


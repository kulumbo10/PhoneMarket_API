import phone from "../models/phones.js";

class PhoneController {

    //get meth
    static async listPhones (req, res) {
        try {
            const listsPhones = await phone.find({});
            res.status(200).json(listsPhones);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - REQUEST FAILED` });
        }
      };

       //get meth   by id
    static async listPhoneById (req, res) {
        try {
            const id = req.params.id;
            const phoneFinded = await phone.findById(id);
            res.status(200).json(phoneFinded);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - REQUEST FAILED of phone` });
        }
      };

    //post update method
    static async registPhone ( req, res) {
        try {
    const newPhone = await phone.create(req.body);
    res.status(201).json({ message: "created sucessfully", phone: newPhone })
        } catch (erro) {
            req.status(500).json({ message: `${erro.message} - Falha ao cadastrar Phone` });

        }
    };

       //put    update meth   by id
       static async updatePhoneById (req, res) {
        try {
            const id = req.params.id;
            await phone.findByIdAndUpdate(id, req.body);    //essa atualizacao e feita pelo corpo
            res.status(200).json({ message: "phone finded and update" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - update FAILED for phone` });
        }
      };

      //delete metho        by id
      static async deletePhoneById (id) {
        try {
            const id = req.params.id;
            await phone.findByIdAndDelete(id);
            res.status(200).json({ message: "Phone deleted sucessfully" });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - phone deleted !` })
        }
      }

};

export default PhoneController;
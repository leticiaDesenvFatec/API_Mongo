const express = require('express');
const router = express.Router();
const Leads = require('../models/Leads');

router.get('/', async (req, res) => {
    try{
        const leads = await Leads.find({});
        return res.status(200).send(leads);
    } catch(err){
        return res.status(500).send({message: 'Erro ao consultar as Leads.'})
    }
});

router.post('/', async (req, res) => {
    try{
        console.log(req.body)
        await Leads.create(req.body).then(result => {
            res.status(200).send({message: 'Lead criada como sucesso.'})
        })

    } catch(err){
        return res.status(500).send({message: 'Erro ao cadastrar uma Lead.'});
    }
});

router.put('/:id', async (req, res) => {
    try{
        await Leads.updateOne({_id: req.params.id}, req.body).then(() => {
            res.status(200).send({message: 'Lead atualizada com sucesso.'})
        })
    } catch(err){
        return res.status(500).send({message: 'Erro ao atualizar a Lead.'});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await Leads.deleteOne({_id: req.params.id}).then(() => {
            res.status(200).send({message: 'Lead excluída com sucesso.'})
        })
    } catch(err){
        return res.status(500).send({message: 'Erro ao excluir a Lead.'})
    }
});


module.exports = router;
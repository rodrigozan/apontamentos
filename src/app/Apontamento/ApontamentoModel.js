import mongoose, { Schema } from 'mongoose';

const apontamentoSchema = new Schema({
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    projeto: {
        type: String,
        required: true,
    },
    tempoInicio: {
        type: Date,
        required: true,
    },
    tempoFinalizacao: {
        type: Date
    }
});

const Apontamento = mongoose.model('Apontamento', apontamentoSchema);

export default Apontamento;

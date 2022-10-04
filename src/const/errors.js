module.exports = {
    'ValidationError': {
        code: 1000,
        message: 'Error de validación.',
        response: 400
    },
    'FaltanCamposError': {
        code: 1001,
        message: 'Faltan parámetros necesarios.',
        response: 400
    },
    'SinResultadosError': {
        code: 1002,
        message: 'La consulta no tiene resultados.',
        response: 404
    },
    'PacienteInexistente': {
        code: 2000,
        message: 'Paciente inexistente.',
        response: 404
    },
    'MedicoInexistente': {
        code: 3000,
        message: 'Médico no encontrado.',
        response: 404
    },
    'MedicoAlreadyExistsError': {
        code: 3001,
        message: 'El/la médico ya se encuentra registrado',
        response: 409
    },
    'MedicoConPacienteError': {
        code: 3002,
        message: "El/la médico tiene pacientes en atención. Deberá asignarlos a otro profesional antes de borrar el registro.",
        response: 409
    },
}
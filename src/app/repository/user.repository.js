import models from '../model'

export default {
    // CREATE
    store: async (data) => await models.users.create(data),

    // READ
    all: async (data) => await models.users.findAll(),

    // READ by uuid
    find: async (uuid) => {
        return await models.users.findOne({
            where: {
                uuid: Buffer(uuid, 'hex')
            }
        })
    },

    //READ by id
    findById: async (id) => await models.users.findByPk(id)
    
    // UPDATE
    // DELETE
}
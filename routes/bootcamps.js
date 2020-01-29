const router = require('express').Router()
const { 
        getBootCamps, 
        createBootCamp, 
        getBootCamp, 
        updateBootCamp,
        deleteBootCamp 
    } = require('../controllers/bootcamps')

router.route('/')
.get(getBootCamps)
.post(createBootCamp)

router.route('/:id')
.get(getBootCamp)
.put(updateBootCamp)
.delete(deleteBootCamp)


module.exports = router;
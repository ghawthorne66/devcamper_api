const Bootcamp = require('../models/Bootcamp');

//@desc get all bootcamps
//@route GET/api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, count: bootcamps.length, data:  bootcamps })
  } catch (err) {
    res.status(400)({ success: false })
  }
};

//@desc Get single bootcamp
//@route GET/api/v1/bootcamps/:id
//@access Public
exports.getBootcamp = async (req, res, next) => {
 try{
   const bootcamp = await Bootcamp.findById(req.params.id);

   if(!bootcamp) {
     res.status(401).json({ success: false })
   }

   res.status(200).json({ success: true, data: bootcamp })

 } catch (err) {
  res.status(400).json({ success: false })
 }
};

//@desc Create newbootcamp
//@route POST/api/v1/bootcamps/:id
//@access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
   
    res.status(201).json({
      success: true,
      data: bootcamp
    })

  } catch (err) {
    res.status(400).json({success: false});
  }
};

//@desc Update newbootcamp
//@route PUT/api/v1/bootcamps/:id
//@access Private
exports.updateBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if(!bootcamp) {
      res.status(401).json({ success: false })
    }
    res.status(200).json({ success: true, data: bootcamp })

  } catch (err) {
    res.status(400).json({success: false});
    
  }
  

};

//@desc Delete newbootcamp
//@route DELETE/api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if(!bootcamp) {
      res.status(400).json({ success: false })
    }
    res.status(200).json({ success: true, data: {} })

  } catch (err) {
    res.status(400).json({success: false});
    
  }
  
  
};

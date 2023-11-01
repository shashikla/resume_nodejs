const express = require('express');
const mongoose = require('mongoose');

const responsibilitySchema = new mongoose.Schema({
    type: String,
  });
  const workExperienceSchema = new mongoose.Schema({
    Job_role: String,
    Company: String,
    Location: String,
    Dates_of_Employment: String,
    Responsibilities: [String],
  }); 
  const educationSchema = new mongoose.Schema({
    Degree: String,
    Institution: String,
    Location: String,
    Graduation_Date: String,
  });
  const certificationSchema = new mongoose.Schema({
    Certification_Name: String,
    Certifying_Body: String,
    Date_of_Certification: String,
  });
  
  const contactSchema = new mongoose.Schema({
    Email: String,
    LinkedIn_Profile: String,
  });

const userSchema = new mongoose.Schema({
    Name: {
        required : true,
        type : String,
        set: (name) => name.toLowerCase()
    },
    Description: {
        required : true,
        type : String
    },
    Current_role : {
        required : true,
        type : String
    },
    Image: {
        data: Buffer,
        contentType: String,
      },
    Details : {
        Contact : contactSchema,
    
    Skills : [String],
    Technologies : [String],
    Education : [educationSchema],
    Work_Experience:[workExperienceSchema],
    Certification : certificationSchema,
},
})

module.exports = mongoose.model('User', userSchema);
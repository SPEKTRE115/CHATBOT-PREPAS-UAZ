const mopngoose=require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PlantelSchema = new Schema({
  codigoPlantel:String,
  nombrePlantel:String,
  booleanEscolarizado:Boolean
},
{timestamps:true}
);

module.exports=mongoose.model('Plantel',PlantelSchema);
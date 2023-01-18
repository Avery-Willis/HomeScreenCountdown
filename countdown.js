const widget = new ListWidget();

// get date from params
let arg = args.widgetParameter.toString()
let list = arg.split("/")
let month = list[0]-1
let day = list[1]

//initialize dates
var today = new Date()
var aot=new Date(today.getFullYear(), month, day);

// calculate number of days
var one_day=1000*60*60*24;
var num_days = Math.ceil((aot.getTime()-today.getTime())/(one_day));

//create text 
let stack = widget.addStack()
const text2 =stack.addText(num_days.toString()+" days")
text2.font = Font.systemFont(30)
text2.textColor = Color.red();
text2.shadowColor = Color.black()
text2.shadowRadius=2
text2.shadowOffset = new Point(2,2)

//finalize widget
Script.setWidget(widget)
widget.presentMedium()
Script.complete()

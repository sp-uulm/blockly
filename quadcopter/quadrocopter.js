Blockly.Blocks['liveEval'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("🔎");
    this.appendValueInput("EXPRESSION")
        .appendField("x");
    this.appendDummyInput()
        .appendField(new Blockly.FieldLabelSerializable("="), "VALUE");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['takeoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("takeoff");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['land'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("land");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pose");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.appendDummyInput()
        .appendField("angle")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setInputsInline(true);
    this.setOutput(true, "pose");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['pose4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pose");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("angle");
    this.setInputsInline(true);
    this.setOutput(true, "pose");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("sleep");
    this.appendValueInput("time")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['moveto'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("moveTo");
    this.appendValueInput("pose")
        .setCheck("pose")
        .appendField("pose");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['moveto3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("moveTo");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['moveto4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("moveTo");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.appendValueInput("angle")
        .setCheck("Number")
        .appendField("angle");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_pose'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pose");
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_pose1dd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pose");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["quad1","quad1"], ["helm_gelb","helm_gelb"], ["helm_blau","helm_blau"], ["helm_weiss","helm_weiss"], ["gesture_wand","gesture_wand"]]), "name");
    this.setOutput(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['moveto4_grad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("moveTo");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.appendDummyInput()
        .appendField("angle")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['wait4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.appendDummyInput()
        .appendField("angle")
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['wait3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.appendValueInput("z")
        .setCheck("Number")
        .appendField("z");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['wait2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['wait1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['gesture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("gesture")
        .appendField(new Blockly.FieldDropdown([["roll right","roll_right"], ["roll left","roll_left"], ["pitch up","pitch_up"], ["pitch down","pitch_down"]]), "gesture");
    this.setInputsInline(true);
    this.setOutput(true, "pose");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['photo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("photo");
    this.setInputsInline(true);
    this.setOutput(true, "photo");
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['display'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("display");
    this.appendValueInput("photo")
        .setCheck("photo")
        .appendField("photo");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['readqr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("readQR");
    this.appendValueInput("photo")
        .setCheck("photo")
        .appendField("photo");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['getfield'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"], ["z","z"], ["angle","angle"]]), "field");
    this.appendValueInput("field")
        .setCheck("pose")
        .appendField("of");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['setfield'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["x","x"], ["y","y"], ["z","z"], ["angle","angle"]]), "field");
    this.appendValueInput("field")
        .setCheck("pose")
        .appendField("of");
    this.appendValueInput("to")
        .setCheck("Number")
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['trigonometry'] = {
  init: function() {
    this.appendValueInput("NUM")
        .setCheck("Number")
        .appendField(new Blockly.FieldDropdown([["sin","math.sin"], ["cos","math.cos"], ["tan","math.tan"], ["asin","math.asin"], ["acos","math.acos"], ["atan","math.atan"]]), "OP");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

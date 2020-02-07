Blockly.Lua['takeoff'] = function(block) {
	var code = 'takeoff()\n';
	return code;
};

Blockly.Lua['land'] = function(block) {
	var code = 'land()\n';
	return code;
};

Blockly.Lua['pose'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var angle_angle = block.getFieldValue('angle');
  var code = '{x = ' + value_x + ', y = ' + value_y + ', z = ' + value_z + ', psi = ' + (angle_angle * Math.PI / 180) + '}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['pose4'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var angle_angle =  Blockly.Lua.valueToCode(block, 'angle', Blockly.Lua.ORDER_ATOMIC);
  var code = '{x = ' + value_x + ', y = ' + value_y + ', z = ' + value_z + ', psi = ' + angle_angle + '}';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['wait'] = function(block) {
	var code = 'wait()\n';
	return code;
};

Blockly.Lua['sleep'] = function(block) {
  var value_time = Blockly.Lua.valueToCode(block, 'time', Blockly.Lua.ORDER_ATOMIC);
  var code = 'sleep(' + value_time + ')\n';
  return code;
};

Blockly.Lua['moveto'] = function(block) {
  var value_pose = Blockly.Lua.valueToCode(block, 'pose', Blockly.Lua.ORDER_ATOMIC);
  var code = 'moveTo(' + value_pose + ')\n';
  return code;
};

Blockly.Lua['moveto3'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var code = 'moveTo(' + value_x + ', ' + value_y + ', ' + value_z + ')\n';
  return code;
};

Blockly.Lua['moveto4'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var value_psi = Blockly.Lua.valueToCode(block, 'angle', Blockly.Lua.ORDER_ATOMIC);
  var code = 'moveTo(' + value_x + ', ' + value_y + ', ' + value_z + ', ' + value_psi + ')\n';
  return code;
};

Blockly.Lua['get_pose'] = function(block) {
  var code = 'pose()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['get_pose1dd'] = function(block) {
  var dropdown_name = block.getFieldValue('name');
  var code = 'pose(\'' + dropdown_name + '\')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['moveto4_grad'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var angle_angle = block.getFieldValue('angle');
  var code = 'moveTo(' + value_x + ', ' + value_y + ', ' + value_z + ', ' + (angle_angle * Math.PI / 180) + ')\n';
  return code;
};

Blockly.Lua['wait4'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var angle_angle = block.getFieldValue('angle');
  var code = 'wait(' + value_x + ', ' + value_y + ', ' + value_z + ', ' + (angle_angle * Math.PI / 180) + ')\n';
  return code;
};

Blockly.Lua['wait3'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'z', Blockly.Lua.ORDER_ATOMIC);
  var code = 'wait(' + value_x + ', ' + value_y + ', ' + value_z + ')\n';
  return code;
};

Blockly.Lua['wait2'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'y', Blockly.Lua.ORDER_ATOMIC);
  var code = 'wait(' + value_x + ', ' + value_y + ')\n';
  return code;
};

Blockly.Lua['wait1'] = function(block) {
  var value_x = Blockly.Lua.valueToCode(block, 'x', Blockly.Lua.ORDER_ATOMIC);
  var code = 'wait(' + value_x + ')\n';
  return code;
};

Blockly.Lua['gesture'] = function(block) {
  var dropdown_gesture = block.getFieldValue('gesture');
  // TODO: Assemble Lua into code variable.
  var code = 'gesture(\'' + dropdown_gesture + '\')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['photo'] = function(block) {
  var code = 'photo()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['display'] = function(block) {
  var value_photo = Blockly.Lua.valueToCode(block, 'photo', Blockly.Lua.ORDER_ATOMIC);
  var code = 'display(' + value_photo + ')\n';
  return code;
};

Blockly.Lua['readqr'] = function(block) {
  var value_photo = Blockly.Lua.valueToCode(block, 'photo', Blockly.Lua.ORDER_ATOMIC);
  var code = 'read_qr(' + value_photo + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['getfield'] = function(block) {
  var dropdown_field = block.getFieldValue('field');
  var value_field = Blockly.Lua.valueToCode(block, 'field', Blockly.Lua.ORDER_ATOMIC);
  var code = value_field + '.' + (dropdown_field == 'angle' ? 'psi' : dropdown_field);
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['setfield'] = function(block) {
  var dropdown_field = block.getFieldValue('field');
  var value_field = Blockly.Lua.valueToCode(block, 'field', Blockly.Lua.ORDER_ATOMIC);
  var value_to = Blockly.Lua.valueToCode(block, 'to', Blockly.Lua.ORDER_ATOMIC);
  var code = value_field + '.' + dropdown_field + ' = ' + value_to + '\n';
  return code;
};

Blockly.Lua['trigonometry'] = function(block) {
  var dropdown_op = block.getFieldValue('OP');
  var value_num = Blockly.Lua.valueToCode(block, 'NUM', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = dropdown_op + '(' + value_num + ')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

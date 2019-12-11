var toolbox = document.getElementById("toolbox");

var options = {
	toolbox : toolbox,
	collapse : false,
	comments : false,
	disable : false,
	maxBlocks : Infinity,
	trashcan : true,
	horizontalLayout : false,
	toolboxPosition : 'start',
	css : true,
	rtl : false,
	scrollbars : false,
	sounds : true,
	oneBasedIndex : true
};

var workspace = Blockly.inject('blocklyDiv', options);

// connection to the qt c++ application
var bridge;
new QWebChannel(qt.webChannelTransport,
    function(channel){
        bridge = channel.objects.bridge;

        // connect signals
        bridge.highlight_block.connect(workspace.highlightBlock.bind(workspace));
        bridge.set_field_value.connect(function(id, field, value) {
            var block = workspace.getBlockById(id);
            if (block == null) {
                bridge.log("could not find Block " + id);
            } else {
                block.setFieldValue(value, field);
            }
        });
    });

// send all events to the c++ application
function send_events(event) {
    if (event.type != Blockly.Events.UI) {
        bridge.on_event(event.type, event.workspaceId, event.blockId, event.group);

        var xml = Blockly.Xml.workspaceToDom(workspace);
        var data = Blockly.Xml.domToText(xml);
        
        var code = Blockly.Lua.workspaceToCode(workspace);
        
        bridge.state_changed(data, code);
    }
}
workspace.addChangeListener(send_events);

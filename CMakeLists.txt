cmake_minimum_required(VERSION 3.5)
project(interactive_script_blockly)

# find dependencies
find_package(ament_cmake REQUIRED)

install(
  DIRECTORY quadcopter msg
  DESTINATION share
)

install(
  FILES blockly_compressed.js blocks_compressed.js lua_compressed.js
  DESTINATION share
)

ament_package()

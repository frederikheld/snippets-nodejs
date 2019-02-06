# Basic setup of a Mocha test suite

## Basic structure

Tests should be in a separate directory. The test directory should be structured in the same way as the implementation to be tested. To maintain the same strucutre in tests and implementation keeps things manageable.

## nyc for coverage

The directory of the tests themselves has to be excluded. This can be done when calling nyc in in ```package.json``` with the ```-x``` flag. To avoid repetition, you can put it into a ```.nycrc``` file instead.

nyc generates output files depending on the generator you selected. They will be put in the folder ```.nyc_output```. You should add this folder to ```.gitignore```.
var explorer = cdm("explorer");
var geometry = explorer.geometry();
var topology = explorer.topology();
var axes = explorer.geometry().child("referenceHolder/axisHolder");
var planes = explorer.geometry().child("referenceHolder/planeHolder");
var box_1 = geometry.box(1, 1, 1);
var cylinder_1 = geometry.cylinder(1, 1, 0, 0, 1);
var cut_1 = geometry.cut([box_1], [cylinder_1]);
cut_1.translate(2, 0, 0);

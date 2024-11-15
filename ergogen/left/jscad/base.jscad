function plate_extrude_4_outline_fn(){
    return new CSG.Path2D([[-10,-12],[10,-12]]).appendArc([12,-10],{"radius":2,"clockwise":false,"large":false}).appendPoint([12,2.25]).appendPoint([29,2.25]).appendArc([31,4.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([31,9.5]).appendPoint([45,9.5]).appendPoint([45,-14.75]).appendArc([47,-16.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([86,-16.75]).appendArc([88,-14.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([88,5.25]).appendArc([87.8540496,6],{"radius":2,"clockwise":false,"large":false}).appendArc([88,6.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([88,40.75]).appendArc([86,42.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([69,42.75]).appendPoint([69,62.25]).appendArc([67,64.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([50,64.25]).appendPoint([50,71.75]).appendArc([48,73.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([28,73.75]).appendArc([26,71.75],{"radius":2,"clockwise":false,"large":false}).appendPoint([26,64.25]).appendPoint([9,64.25]).appendArc([7,62.25],{"radius":2,"clockwise":false,"large":false}).appendPoint([7,50]).appendPoint([-10,50]).appendArc([-12,48],{"radius":2,"clockwise":false,"large":false}).appendPoint([-12,-10]).appendArc([-10,-12],{"radius":2,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[61.75,42.75],"radius":3})
.union(
    CAG.circle({"center":[66.5,-9.5],"radius":3})
).union(
    CAG.circle({"center":[29.5,50.25],"radius":3})
).union(
    CAG.circle({"center":[9.5,28.5],"radius":3})
).union(
    CAG.circle({"center":[9.5,9.5],"radius":3})
).union(
    new CSG.Path2D.arc({"center":[48.5,21.75],"radius":3,"startangle":250.5287792,"endangle":606.4435354}).appendPoint([47.5,19]).appendPoint([47.5,18.9215729]).close().innerToCAG()
)).extrude({ offset: [0, 0, 4] });
}




                function base_case_fn() {
                    

                // creating part main of case base
                let base__part_main = plate_extrude_4_outline_fn();

                // make sure that rotations are relative
                let base__part_main_bounds = base__part_main.getBounds();
                let base__part_main_x = base__part_main_bounds[0].x + (base__part_main_bounds[1].x - base__part_main_bounds[0].x) / 2
                let base__part_main_y = base__part_main_bounds[0].y + (base__part_main_bounds[1].y - base__part_main_bounds[0].y) / 2
                base__part_main = translate([-base__part_main_x, -base__part_main_y, 0], base__part_main);
                base__part_main = rotate([0,0,0], base__part_main);
                base__part_main = translate([base__part_main_x, base__part_main_y, 0], base__part_main);

                base__part_main = translate([0,0,0], base__part_main);
                let result = base__part_main;
                
            
                    return result;
                }
            
            
        
            function main() {
                return base_case_fn();
            }

        
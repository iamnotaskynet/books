program EX1_1;
uses Crt;
var A, B, C, D: real;
begin
    read(A, B, C);
    D := B*B - 4*A*C;

    if D = 0 then
        writeln('Equation have one solution: ', -B/(2*A))
        else if D > 0 then
            writeln('Equation have two solutions: ', (-B + D)/(2*A), (-B - D)/(2*A))
            else 
                writeln('Equation have no solutions.');
    Delay(3000);
end.

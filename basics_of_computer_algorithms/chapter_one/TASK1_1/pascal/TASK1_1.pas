program EX1_1;
uses Crt;
var x_1, x_2, p, q, temp_p, temp_q: real;
begin
    read(temp_p);
    if temp_p = 0 then
    begin
        exit;
    end;
    
    read(temp_q);
    if temp_q = 0 then
    begin
        exit;
    end;

    p := temp_p;
    q := temp_q;

    x_1 := (-p - Sqrt( Sqr(p) - 4*q))/2;
    x_2 := (-p + Sqrt( Sqr(p) - 4*q))/2;

    writeln(x_1);
    writeln(x_2);

    Delay(3000);
end.
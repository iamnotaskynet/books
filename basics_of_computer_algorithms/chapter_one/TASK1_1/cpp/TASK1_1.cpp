#include <iostream>

int main()
{
    double x_1, x_2, p, q, temp_p, temp_q;

    std::cin >> p;
    if (p == 0) exit(1);
    std::cout <<std::endl;

    std::cin >> q;
    if (q == 0) exit(1);
    std::cout <<std::endl;

    x_1 = (-p - sqrt( p*p - 4*q))/2;
    x_2 = (-p + sqrt( p*p - 4*q))/2;

    std::cout << x_1 << std::endl;
    std::cout << x_2 << std::endl;

    return 0;
}
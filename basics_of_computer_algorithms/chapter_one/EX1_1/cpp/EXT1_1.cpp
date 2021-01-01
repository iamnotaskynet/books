#include <iostream>

int main()
{
    double A, B, C, D;

    std::cin >> A >> B >> C;

    D =  B*B - 4*A*C;
    std::cout << D;
    std::cout << std::endl;
    if( D == 0) {
        std::cout   << "Equation have one solution: " 
                    << -B/(2*A) << std::endl;
    }
    else if ( D > 0) {
        std::cout   << "Equation have two solutions: "
                    << (-B + D)/(2*A) << " " 
                    <<(-B - D)/(2*A) << std::endl;
    }
    else {
        std::cout   << "Equation have no solutions." << std::endl;
    };
    std::cin.ignore();

    return 0;
}
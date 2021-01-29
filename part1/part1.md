1. At line 11 the value 2 wil be printed to the web console because var i has a global scale .
2. At line 12 the vaue 150 will be printed to the web console because var discountedPrice has a global scale. 
3. At line 13 the value 150 will be printed to the web console because finalPrice has a global scale therefore it can retain the updated value from the for loop. 
4. The function will return the array [50, 100, 150]. This is becuase the array var discounted can retain its updated values from the for loop. 
5. At line 11 an error will be printed to the web console becuase let i has a local scale inside of the for loop.  
6. At line 12 an error will be printed to the web console becuase let i has a local scale inside of the for loop.
7. At line 13 the value 150 will be printed to the web console because let finalPrice was declared outside of the for loop so it will retain its last update value.
8. The function will return the array [50, 100, 150]. This is becuase the array let discounted was declared outside of the for loop so it will retain its updated values from the for loop.
9. At line 11 an error will be printed to the web console becuase let i has a local scale inside of the for loop.  
10. At line 12 the value 50 will be displayed because it is the first value assigned to const discountedPrice. But an error will occur on line 6 on the second run of the for loop since it will try to update the value.
11. At line 13 the value 0 will be displayed because it is the first value assigned to const final. But an error will occur on line 6 on the first run of the for loop because it will try to update const finalPrice.
12. The function will return [0, 0, 0] becuase const finalPrice will never be reassigned so discount.push(finalPrice) will keep adding 0 into the array discounted. 
13. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
14. A. '32'. 2 is being concatenated to the string '3'.
    B. 1. '3' is being converted to a number so 3-2 is calculated.
    C. 3. null is taken as 0. 3+0. 
    D. '3null'. null is being concatenated to the string '3'.
    E. 4. true has the value of 1. Therefore 3+1=4.
    F. 0. Both false and null have numeric values equal to 0. 0+0.
    G. '3undefined'. Undefined is being concatenated to the string '3'.
    H. NaN. Undefined cannot be enumerated, so an error is returned.
15. A. true. '2' is converted to a number and the compared with 1.
    B. false. The character '2' is greater than the character '1'
    C. true. '2' is converted to a number. 2 equals 2.
    D. false. '2' is not converted to a number. A number does not equal a string. 
    E. false. true has a value of 1. 1 does not equal 2.
    F. true. Boolean(x) where x is 1 or greater will be true.
16. Both == and === are equality operators, the only difference is that === does not do any type conversion.
17. How are you? This is because boolean true does not have a value of 2, but boolean 2 has a value of true. Therefore the if statement is skipped and the else if statement is printed. 
18. part1-question18.js
19. newArr = [6, 8, 10]. I believe this will be the result because it is my understanding that function modifyArray() will be loaded but no run completely, that is until doSomething() runs first and makes a callback. So doSomething() will add 2 to each number and then these numbers will be multiplied by 2. 
20. part1-question20.js
21. 1
    4
    3
    2
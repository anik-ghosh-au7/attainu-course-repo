s1 = int(input("Please enter your marks /i/n subject1 :"))
s2 = int(input("Please enter your marks /i/n subject2 :"))
s3 = int(input("Please enter your marks /i/n subject3 :"))
s4 = int(input("Please enter your marks /i/n subject4 :"))
s5 = int(input("Please enter your marks /i/n subject5 :"))

perc = (s1 + s2 + s3 + s4 + s5) / 5
print("Your percentage is: "+str(perc))

if perc >= 90:
    print("Your grade is A")
elif 90 > perc >= 70:
    print("Your grade is B")
elif 70 > perc >= 50:
    print("Your grade is C")
elif 30 > perc >= 50:
    print("Your grade is D")
else:
    print("Your grade is E")

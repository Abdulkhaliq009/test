def askUser():
    print("Was muss man weiter machen?")
    print("1. Calculator")
    print("2. Password Generator")

    try:
        choose = int(input("Enter your choice (1 or 2): "))
        return choose
    except ValueError:
        print("Error: Please enter a valid number (1 or 2)")
        return askUser()

def calculator():
    print("Calculator selected.")
    a = float(input("Enter first number: "))
    b = float(input("Enter second number: "))
    print(f"Sum: {a + b}")

def password_generator():
    print("Password Generator selected.")
    import random, string
    length = int(input("Enter password length: "))
    password = ''.join(random.choices(string.ascii_letters + string.digits, k=length))
    print("Generated password:", password)

choice = askUser()

if choice == 1:
    calculator()
elif choice == 2:
    password_generator()
else:
    print("Wrong choice")

def user_ipl(abdul):
    print("hello user_ilp")

def greet_person(name):
    """
    Prints a personalized greeting for the given person.
    
    Args:
        name (str): The name of the person to greet.
    """
    print(f"Hello {name}!")  # <- must be indented inside the function


# Call the function
greet_person("Alice")
greet_person("Bob")


def calculate_product(num1, num2):
    """
    Calculate the product of two numbers.
    
    Args:
        num1 (float or int): The first number.
        num2 (float or int): The second number.
        
    Returns:
        float or int: The product of the two numbers.
    """
    return num1 * num2


# Call the function and store the result
result = calculate_product(5, 7)
print("The product is:", result)

# You can call it with other numbers too
another_result = calculate_product(3.5, 2)
print("Another product is:", another_result)

def calculate_bmi(weight_kg, height_m):
    """
    Calculate the Body Mass Index (BMI) for a person.
    
    Args:
        weight_kg (float): Weight in kilograms.
        height_m (float): Height in meters.
        
    Returns:
        float: The calculated BMI.
    """
    if height_m <= 0:
        raise ValueError("Height must be greater than 0 meters.")
    
    bmi = weight_kg / (height_m ** 2)
    return bmi


# Test the function with different individuals
bmi_person1 = calculate_bmi(70, 1.75)  # 70 kg, 1.75 m
print("Person 1 BMI:", round(bmi_person1, 2))

bmi_person2 = calculate_bmi(85, 1.8)   # 85 kg, 1.8 m
print("Person 2 BMI:", round(bmi_person2, 2))



# Writing the generated README content to a file named README.md

readme_content = """
# Salary Calculator

This project is a **Net Salary Calculator** written in JavaScript. It calculates the net salary an employee receives after deducting PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund) contributions based on gross salary and benefits.

## Table of Contents
- [How It Works](#how-it-works)
- [Features](#features)
- [How to Run](#how-to-run)
- [Example Calculation](#example-calculation)
- [Code Explanation](#code-explanation)
- [Contributing](#contributing)
- [License](#license)

---

## How It Works
1. The program takes **Basic Salary** and **Benefits** as inputs to calculate the **Gross Salary**.
2. The following deductions are applied:
   - **PAYE**: Based on the gross salary using tiered tax rates.
   - **NHIF**: A fixed amount based on the gross salary.
   - **NSSF**: A percentage of the gross salary with contributions divided into two tiers.
3. The **Net Salary** is calculated by subtracting total deductions from the gross salary.
4. All deductions and the final net salary are displayed as output.

---

## Features
- **Dynamic Gross Salary Calculation**: Combines basic salary and benefits.
- **PAYE Deduction**: Progressive tax rates based on the gross salary.
- **NHIF Deduction**: Fixed rates based on gross salary slabs.
- **NSSF Deduction**: Tier-based contributions for Tier 1 and Tier 2.
- **Detailed Output**: Displays a breakdown of all deductions and the final net salary.
- **Customizable Input**: Easily change the basic salary and benefits.

---

## How to Run
### Requirements:
- Install [Node.js](https://nodejs.org/) to run the script in a terminal.

### Steps:
1. Save the script in a file called `salaryCalculator.js`.
2. Open a terminal and navigate to the file's directory.
3. Run the script with the following command:
   ```bash
   node salaryCalculator.js


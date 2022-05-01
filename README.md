# Must have these classes

## Employee
    variables:
      -name
      -id
      -email

    classes:
      -getName()
      -getId()
      -getEmail()
      -getRole() // Returns 'Employee'
## Manager
    classes:
      -officeNumber()
      -getRole() // Overridden to return 'Manager'
## Engineer
    variables:
      -github

    classes:
      -getGithub()
      -getRole() // Overridden to return 'Engineer'
## Intern
    variables:
      -school

    classes:
      -getSchool()
      -getRole() // Overridden to return 'Intern'



### Optional - 'Add Validation'
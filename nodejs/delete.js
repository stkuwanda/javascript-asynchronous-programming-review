const bankAccount = {
  isSelected: true,
  name: 'Kuwanda Estate',
  balance: 3459007733688843
}

const { isSelected: _, ...newObj} = bankAccount;
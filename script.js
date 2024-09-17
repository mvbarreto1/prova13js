let balance = 1000;  // Saldo inicial

function performOperation() {
    const operation = document.getElementById('operation').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const result = document.getElementById('result');

    try {
        if (isNaN(amount) || amount <= 0) {
            throw new Error('Valor inválido. Insira um valor maior que zero.');
        }

        switch (operation) {
            case 'consult':
                result.textContent = `Saldo atual: R$ ${balance.toFixed(2)}`;
                break;
            case 'withdraw':
                if (amount > balance) {
                    throw new Error('Saldo insuficiente.');
                }
                balance -= amount;
                result.textContent = `Saque realizado com sucesso! Novo saldo: R$ ${balance.toFixed(2)}`;
                break;
            case 'deposit':
                balance += amount;
                result.textContent = `Depósito realizado com sucesso! Novo saldo: R$ ${balance.toFixed(2)}`;
                break;
            default:
                throw new Error('Operação inválida.');
        }
    } catch (error) {
        result.textContent = `Erro: ${error.message}`;
    }
}
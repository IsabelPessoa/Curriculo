import javax.swing.JFrame;
import javax.swing.JLabel;

public class Janela {
    public static void main(String[] args) {
        // Cria a janela
        JFrame frame = new JFrame("Minha Primeira Janela");

        // Define o que acontece quando o usuário fecha a janela
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Adiciona um rótulo (label) na janela
        JLabel label = new JLabel("Olá, mundo!");
        frame.add(label);

        // Define o tamanho da janela (largura, altura)
        frame.setSize(300, 200);

        // Torna a janela visível
        frame.setVisible(true);
    }
}

<?php
@$mysqli = new mysqli('localhost', 'root', '', 'informatrix');

if (mysqli_connect_errno()) {
    printf("Brak połączenia z serwerem mySQL. Kod błędu: %s\n", mysqli_connect_error());
    exit;
} else {
    echo "Nawiązanie połączenia";
    
    if ($result = $mysqli->query('SELECT * FROM klienci')) {
        //print_r($result);
        echo '<br>';
        echo '<table>';
        while ($row = $result->fetch_assoc()){
            //print_r($row);
            echo "<tr>
            <td>" . $row['imie'] . "</td>
            <td>" . $row['nazwisko'] . "</td>
            <td>" . $row['email'] . "</td>
            <td><a href='klienci.php?action=edit&id=" . $row ['id_klienta'] . "'>Edytuj</a></td>
            <td><a href='klienci.php?action=delete&id=" . $row ['id_klienta'] . "'>Usuń</a></td>
            </tr>";
        }
        echo '</tables>';
    }

    if (!isset($_GET['action'])) {
        echo "<form action='klienci.php' method='POST'>
        <input type='text' name='imie'>
        <input type='text' name='nazwisko'>
        <input type='text' name='email'>
        <button type='submit' name='submit'>Prześlij</button>
        </form>";
    }

    if((isset($_GET['action']) && ($_GET['action'] == 'edit'))) {
        $id = $_GET['id'];
        $st = $mysqli->prepare("SELECT * FROM klienci WHERE id_klienta =" . $id);
        $st->execute();
        $st->bind_result($oldId, $nazwisko, $imie, $email, $adres);
        $st->fetch();

        echo "<form action='klienci.php' method='POST'>
        <input type='text' name='imie' value=" . $imie . ">
        <input type='text' name='nazwisko' value=" . $nazwisko . ">
        <input type='text' name='email' value=" . $email . ">
        <input type='hidden' name='action' value='$adres'>
        <input type='hidden' name='editID' value=" . $id . ">
        <button type='submit' name='submit'>Edytuj</button>
        </form>";

    }
    
    if((isset($_POST['submit']) && (isset($_POST['action'])))) {
        $id = $_POST['editID'];
        $imie = $_POST['imie'];
        $nazwisko = $_POST['nazwisko'];
        $email = $_POST['email'];
        echo $_POST ['action'];


        $st = $mysqli->prepare("UPDATE klienci SET nazwisko = ?, imie = ?, email = ?, adres = ?");
        $st->bind_param('ssssd', $nazwisko, $imie, $email, $adres, $id);
        $st->execute();
        printf("zmieniono wierszy: %d  \n", $st->affected_rows);
        $st->close();
        header("Location: klienci.php");

        }

    if((isset($_GET['action']) && ($_GET['action'] ==  'delete'))) {
        $id = $_GET ['id'];
        $st = $mysqli->prepare("DELETE FROM klienci WHERE id = ". $id);
        $st->execute();
        printf("usunięto wiersz: %d \n", $st->affected_rows);
        $st->close();
        header("Location: index.php");
    }

    $mysqli->close();
}
?>
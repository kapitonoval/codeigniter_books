<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Welcome to CodeIgniter</title>

    <script src="/dist/bandle.js"></script>
    <style type="text/css">


    </style>
</head>
<body>

<div id="container">
    <header>Test Library</header>
    <div class="container pt-5">
        <div class="row pt-1">

            <div class="md-4 pt-5">
                <form action="/" method="get">
                    <div class="filter-column f-author-count">
                        <select name="author_count" id="">
                            <option value="1">
                                1
                            </option>
                            <option value="2">
                                2
                            </option>
                            <option value="3">
                                3
                            </option>
                            <option value="4">
                                4
                            </option>
                            <option value="5">
                                5
                            </option>
                        </select>
                    </div>
                    <div class="filter-column f-title">
                        <input type="text" name="title" placeholder="введите название книги">
                    </div>
                    <div class="filter-column f-author">
                        <input type="text" name="author_name" placeholder="введите имя автора">
                    </div>
                    <div>
                        <button type="submit">поиск</button>
                    </div>
                </form>
            </div>
            <div class="md-8 pt-5">
                <div class="main-feed">
                    <table class="book-item-tbl">
                        <?php foreach ($feedDataBooks as $bookItem): ?>
                            <tr class="book-item-row">
                                <td class="book-img-td">
                                    <div class="book-img"><img src="/images/upload/<?= $bookItem['img'] ?>" alt=""></div>
                                </td>
                                <td class="book-name-td">
                                    <div class="book-name"><?= $bookItem['name'] ?></div>
                                </td>

                            </tr>
                        <?php endforeach; ?>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>

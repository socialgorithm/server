import * as http from "http";

export default function httpHandler(req: http.IncomingMessage, res: http.ServerResponse): void {
    res.writeHead(200);
    res.end(index);
}

const index = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="Socialgorithm Tournament Server">
    <meta name="author" content="socialgorithm">

    <title>SG Tournament Server</title>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
      integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
      integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

    <style type="text/css" media="all">
        html, body {
            background: #efefef;
        }
        /* Space out content a bit */
        body {
            padding-top: 20px;
            padding-bottom: 20px;
            background: #efefef;
        }

        /* Everything but the jumbotron gets side spacing for mobile first views */
        .header,
        .marketing,
        .footer {
            padding-right: 15px;
            padding-left: 15px;
        }

        /* Custom page header */
        .header {
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e5e5;
        }
        /* Make the masthead heading the same height as the navigation */
        .header h3 {
            margin-top: 0;
            margin-bottom: 0;
            line-height: 40px;
        }

        /* Custom page footer */
        .footer {
            padding-top: 19px;
            color: #777;
            border-top: 1px solid #e5e5e5;
        }

        /* Customize container */
        @media (min-width: 768px) {
            .container {
                max-width: 730px;
            }
        }
        .container-narrow > hr {
            margin: 30px 0;
        }

        /* Main marketing message and sign up button */
        .jumbotron {
            text-align: center;
            border-bottom: 1px solid #e5e5e5;
        }
        .jumbotron .btn {
            padding: 14px 24px;
            font-size: 21px;
        }

        /* Supporting marketing content */
        .marketing {
            margin: 40px 0;
        }
        .marketing p + h4 {
            margin-top: 28px;
        }

        /* Responsive: Portrait tablets and up */
        @media screen and (min-width: 768px) {
            /* Remove the padding we set earlier */
            .header,
            .marketing,
            .footer {
                padding-right: 0;
                padding-left: 0;
            }
            /* Space out the masthead */
            .header {
                margin-bottom: 30px;
            }
            /* Remove the bottom border on the jumbotron for visual effect */
            .jumbotron {
                border-bottom: 0;
            }
        }
    </style>
</head>

<body>

<div class="container">
    <div class="header clearfix text-center">
        <h1>#socialgorithm</h1>
        <h3 class="text-muted">
            Tournament Server
        </h3>
    </div>

    <div class="jumbotron" style="color: white; background-image: linear-gradient( 135deg, #3C8CE7 10%, #00EAFF 100%);">
        <p class="lead">The server is up and ready for players! You can also connect our web client to it to see live stats and more.</p>
        <p><a class="btn btn-lg btn-default" href="https://play.socialgorithm.org" role="button">Open web client</a></p>
    </div>

    <div class="row marketing">
        <div class="col-lg-6">
            <h4>Documentation</h4>
            <p><a href="https://socialgorithm.org/docs/">Documentation</a> for participants and organisers</p>
            <p><a href="https://github.com/socialgorithm/tournament">Source Code</a> on Github</p>
        </div>
    </div>

    <footer class="footer text-center">
        <p>&copy; 2017 <a href="https://socialgorithm.org">#socialgorithm</a> - All rights reserved &bull; Made by <a href="https://socialgorithm.org/team">people like you</a>!</p>
    </footer>

</div> <!-- /container -->

</body>
</html>

`;

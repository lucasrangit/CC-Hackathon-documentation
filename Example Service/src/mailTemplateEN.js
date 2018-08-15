const mailTemplate = `
<!doctype html>
<html>
<head>
<meta name="viewport" content="width=device-width">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Energy Benchmark Report</title>
<style>
@media only screen and (max-width: 620px) {
  table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
  }

  table[class=body] p,
table[class=body] ul,
table[class=body] ol,
table[class=body] td,
table[class=body] span,
table[class=body] a {  }

  table[class=body] .wrapper,
table[class=body] .article {
    padding: 10px !important;
  }

  table[class=body] .content {
    padding: 0 !important;
  }

  table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
  }

  table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  table[class=body] .btn table {
    width: 100% !important;
  }

  table[class=body] .btn a {
    width: 100% !important;
  }

  table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }

  .btn-primary table td:hover {
    background-color: #34495e !important;
  }

  .btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
  }
}
</style>
</head>
<body class="" style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
<table border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
  <tr>
    <td style="font-family: sans-serif; vertical-align: top;" valign="top">&nbsp;</td>
    <td class="container" style="font-family: sans-serif; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; Margin: 0 auto;" width="580" valign="top"><div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;"> 
        
        <!-- START CENTERED WHITE CONTAINER --> 
        <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Your Conrad Connect energy consumption benchmark arrived.</span>
        <table class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
          
          <!-- START MAIN CONTENT AREA -->
          <tr>
            <td class="wrapper" style="font-family: sans-serif; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top"><table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                <tr>
                  <td style="font-family: sans-serif; vertical-align: top;" valign="top"><p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">Dear Conrad Connect user in English,</p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">We are glad you are interested in analyzing your<strong> fridge consumption</strong>. After analyzing your device, we found your energy efficiency is <strong>%RATING%</strong> compared to a modern energy-efficient fridge.</p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">In the time from %FROMDATE% to %TODATE% (%DAYS% days), we analyzed a total consumption of %TOTALCONSUMPTION% kWh. </p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">This results in a monthly consumption of <strong>%MONTHCONSUMPTION% kWh</strong>, which costs around <strong>%MONTHCONSUMPTIONEURO% €</strong>. </p>
                    <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;">A modern device consumes in the range from %MINFE% kWh (%MINEUROFE% €) per month up to %MAXFE% kWh (%MAXFEEURO% €) with an average of %AVERAGEFE% kWh (%AVERAGEEUROFE% €). </p>
<p class="greeting" style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px; margin-top: 30px;">Best regards,<br>
                      <strong> your Fresh Energy Team.</strong></p></td>
                </tr>
              </table></td>
          </tr>
          
          <!-- END MAIN CONTENT AREA -->
        </table>
        
        <!-- START FOOTER -->
        <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
          <table border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
            <tr>
              <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center"><span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Conrad Connect · Klaus-Conrad-Str.1 · Hirschau D-92240 · Germany </span></td>
            </tr>
          </table>
        </div>
        <!-- END FOOTER --> 
        
        <!-- END CENTERED WHITE CONTAINER --> 
      </div></td>
    <td style="font-family: sans-serif; vertical-align: top;" valign="top">&nbsp;</td>
  </tr>
</table>
</body>
</html>
`;


module.exports = {
  mailTemplate
};

function detect() {
  let e = [".html, php, php2, .php3, phpt, .phtml, .phar, .do, .svg, .action, .cgi, .asp, .ashx, cshtml, .js, .xml, .php7, .asmx, .jsp, .cgi, .htm .cer .aspx , .php4, .php5, .odt"]
  let a = str.split(".")
  returm(!!(e.includes(a[a.length - 1]) || e.includes(a[a.length - 2])));
}

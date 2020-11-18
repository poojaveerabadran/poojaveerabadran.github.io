<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>LEAD SUMMARY</title>
</head>
<body  style="background-color:
 #ccccff;">
<h1 align="center">BOOK DETAILS</h1>

<break></break>
<table  border="3" align="center" style="width:100%;background-color:white;border: 1px solid black;border-collapse: collapse;" cellpadding = "12"  >

<tr>
<th>Name</th><th>Author</th><th>description</th><th>owner</th><th>rent</th>
</tr>
<xsl:for-each select="/book1/book">
<tr>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="author"/></td>
<td><xsl:value-of select="description"/></td>
<td><xsl:value-of select="owner"/></td>
<td><xsl:value-of select="rent"/></td>
</tr>
</xsl:for-each>
</table>


</body>   
 </html>    
</xsl:template>    
</xsl:transform>
<%@ Page Title="" Language="VB" MasterPageFile="~/MasterPage.master" AutoEventWireup="false" CodeFile="info.aspx.vb" Inherits="info" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <br />
Roll-no:-
<asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<asp:Button ID="Button1" runat="server" Text="Insert" />
<br />
<br />
Name:-<asp:TextBox ID="TextBox2" runat="server"></asp:TextBox>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<asp:Button ID="Button2" runat="server" Text="Update" />
<br />
Adress:-<asp:TextBox ID="TextBox3" runat="server"></asp:TextBox>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<asp:Button ID="Button3" runat="server" Text="Delete" />
<br />
ASP:-<asp:TextBox ID="TextBox4" runat="server"></asp:TextBox>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<asp:Button ID="Button4" runat="server" Text="Search" />
<br />
AWD:-<asp:TextBox ID="TextBox5" runat="server"></asp:TextBox>
<br />
<br />
<br />
<br />
    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False"     >
        <Columns>
            <asp:BoundField DataField="ID" HeaderText="ID" SortExpression="ID" />
            <asp:BoundField DataField="s_name" HeaderText="s_name" 
                SortExpression="s_name" />
            <asp:BoundField DataField="s_add" HeaderText="s_add" SortExpression="s_add" />
            <asp:BoundField DataField="asp" HeaderText="asp" SortExpression="asp" />
            <asp:BoundField DataField="awd" HeaderText="awd" SortExpression="awd" />
        </Columns>
    </asp:GridView>
    <asp:AccessDataSource ID="AccessDataSource2" runat="server" 

        DataFile="~/student.mdb" SelectCommand="SELECT * FROM [result]">
    </asp:AccessDataSource>
<br />
<br />
<br />
<br />
<br />
<br />
<asp:SqlDataSource ID="SqlDataSource1" runat="server" 
    ConnectionString="<%$ ConnectionStrings:studentConnectionString %>" 
    ProviderName="<%$ ConnectionStrings:studentConnectionString.ProviderName %>" 
    SelectCommand="SELECT * FROM [result]"></asp:SqlDataSource>
<asp:AccessDataSource ID="AccessDataSource1" runat="server" 
    DataFile="~/student.mdb" SelectCommand="SELECT * FROM [result]">
</asp:AccessDataSource>
</asp:Content>


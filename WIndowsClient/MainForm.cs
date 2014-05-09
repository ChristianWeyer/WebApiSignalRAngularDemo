using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Windows.Forms;
using Microsoft.AspNet.SignalR.Client;
using WebApiSignalRAngularDemo;

namespace WIndowsClient
{
    public partial class MainForm : Form
    {

        public MainForm()
        {
            InitializeComponent();
        }

        private async void button1_Click(object sender, EventArgs e)
        {
            var client = new HttpClient();
            client.BaseAddress = new Uri("http://localhost:41359/api/");

            var result = await client.GetAsync("products");
            var products = await result.Content.ReadAsAsync<List<Product>>();

            listBox1.DisplayMember = "Title";
            listBox1.DataSource = products;
        }

        private async void button2_Click(object sender, EventArgs e)
        {
            var hubConnection = new HubConnection("http://localhost:41359");

            var chat = hubConnection.CreateHubProxy("pokeHub");
            chat.On<string>("poke", msg => this.Invoke(
                new Action(() => MessageBox.Show(msg))));

            await hubConnection.Start();
        }
    }
}

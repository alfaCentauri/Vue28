/* 
 * Copyright (C) 2019 Ingeiero en Computación: Ricardo Presilla.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/** 
    Created on : 08/05/2019, 11:34:00 AM
    Author     : Ingeiero en Computación: Ricardo Presilla.
*/
/**Instancia del vue**/
var vue = new Vue({
    el: '#app',
    data: {
        projects: [
            {title: "Proyecto 1", description: "Descripción del proyecto #1...", updated_at: "2019-05-08 11:01:00"},
            {title: "Proyecto 2", description: "Descripción del proyecto #2...", updated_at: "2019-05-08 11:01:00"},
            {title: "Proyecto 3", description: "Descripción del proyecto #3...", updated_at: "2019-05-08 11:01:00"},
            {title: "Proyecto 4", description: "Descripción del proyecto #4...", updated_at: "2019-05-08 11:01:00"},
        ],
    },
    filters: {
        formateDate: function( date, outputFormat) {
            return moment(date).format(outputFormat);
        }
    },
    mounted: function(){//Función en el Ciclo de vida del Vue.js ciclo mounted.
        var serverURL = 'http://172.104.91.187/projects';
        var _this = this;
        var configAxios= {
            url: serverURL,
            method: 'get', //Metodo de comunicación get, post, delete, put.
            responseType: 'json', // default
            responseEncoding: 'utf8', // default
            // `data` is the data to be sent as the request body
            data: {},            
            // `headers` are custom headers to be sent
            headers: {
                'Content-Type': 'application/json',
                'Api-Token': 'jJHGtk3IoZ84CmKlDz5N206w46yaj6v4mk0vXdTDl5w80iqnk0skp9Jp6NQ3'
            },
        };
        axios.request(configAxios).then( function(response){
            console.log(response);//Prueba de comunicación
            _this.projects = response.data; //Asigna la respuesta del json a la data del vue
        });
    },
});


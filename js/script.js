      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 39.8283, lng: -98.5795},
          zoom: 4,
          mapTypeId: 'terrain',
          styles: trail
        });

        var layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'col6',
            from: '1RAMLCC62meRVQ-rDLA46-n8RUOFVmVofxrfg0qAP',
            where: ''
          },
          options: {
            styleId: 2,
            templateId:2
          }
        });
        layer.setMap(map);
      }
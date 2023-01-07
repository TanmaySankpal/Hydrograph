function drawLine(ctx, x1, y1, x2,y2, stroke = 'black', width = 3) {
    // start a new path
    ctx.beginPath();

    // place the cursor from the point the line should be started 
    ctx.moveTo(x1, y1);

    // draw a line from current cursor position to the provided x,y coordinate
    ctx.lineTo(x2, y2);

    // set strokecolor
    ctx.strokeStyle = stroke;

    // set lineWidht 
    ctx.lineWidth = width;

    // add stroke to the line 
    ctx.stroke();
  }
  let canvas = document.getElementById('myCanvas'),
      ctx = canvas.getContext('2d');

      //Border
      drawLine(ctx,70,730,1502,730,'black', 2);
      drawLine(ctx,70,80,1502,80,'black', 2);
      drawLine(ctx, 70, 730, 70, 80,'black', 2);
      drawLine(ctx,1502,730,1502,80,'black', 2);

      //horizontal
      drawLine(ctx,70, 697.5, 1502, 697.5,'gray',1)
      drawLine(ctx, 70, 665, 1502, 665,'gray',1)
      drawLine(ctx,70,632.5,1502,632.5,'gray',1);
      drawLine(ctx,70,600,1502,600,'gray',1);
      drawLine(ctx,70,567.5,1502,567.5,'gray',1);
      drawLine(ctx,70,535,1502,535,'gray',1);
      drawLine(ctx,70,502.5,1502,502.5,'gray',1);
      drawLine(ctx,70,470,1502,470,'gray',1);
      drawLine(ctx,70,437.5,1502,437.5,'gray',1);
      drawLine(ctx,70,405,1502,405,'gray',1);
      drawLine(ctx,70,372.5,1502,372.5,'gray',1);
      drawLine(ctx,70,340,1502,340,'gray',1);
      drawLine(ctx,70,307.5,1502,307.5,'gray',1);
      drawLine(ctx,70,275,1502,275,'gray',1);
      drawLine(ctx,70,242.5,1502,242.5,'gray',1);
      drawLine(ctx,70,210,1502,210,'gray',1);
      drawLine(ctx,70,177.5,1502,177.5,'gray',1);
      drawLine(ctx,70,145,1502,145,'gray',1);
      drawLine(ctx,70,112.5,1502,112.5,'gray',1);
      
    //vertical
    drawLine(ctx,90.22754,730,90.22754,80,'gray',1);
    drawLine(ctx,112.826424,730,112.826424,80,'gray',1);
    drawLine(ctx,142.920319,730,142.920319,80,'gray',1);
    drawLine(ctx,180.1874,730,180.1874,80,'gray',1);
    drawLine(ctx,224.389343,730,224.389343,80,'gray',1);
    drawLine(ctx,275.3378,730,275.3378,80,'gray',1);
    drawLine(ctx,332.877838,730,332.877838,80,'gray',1);
    drawLine(ctx,396.878357,730,396.878357,80,'gray',1);
    drawLine(ctx, 467.2259,730, 467.2259,80,'gray',1);
    drawLine(ctx,543.8207,730,543.8207,80,'gray',1);
    drawLine(ctx, 626.573853,730, 626.573853,80,'gray',1);
    drawLine(ctx,715.4056,730,715.4056,80,'gray',1);
    drawLine(ctx,810.2431,730,810.2431,80,'gray',1);
    drawLine(ctx,911.0201,730,911.0201,80,'gray',1);
    drawLine(ctx,1017.67511,730,1017.67511,80,'gray',1);
    drawLine(ctx,1130.15173,730,1130.15173,80,'gray',1);
    drawLine(ctx,1248.39709,730,1248.39709,80,'gray',1);
    drawLine(ctx,1372.36194,730,1372.36194,80,'gray',1);

    //Lebal
    ctx.font = "12px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("100", 78.22754, 742);
    ctx.fillText("200", 130.920319, 742);
    ctx.fillText("300", 212.389343, 742);
    ctx.fillText("400", 320.877838, 742);
    ctx.fillText("500", 455.2259, 742);
    ctx.fillText("600", 614.573853, 742);
    ctx.fillText("700", 798.2431, 742);
    ctx.fillText("800", 1005.67511, 742);
    ctx.fillText("900", 1236.39709, 742);
    ctx.fillText("1000",  1486, 742);
  
    ctx.fillText("GPM",734, 749.71875190734863);

    ctx.fillText("0",52, 725.71875190734863);
    ctx.fillText("10",45, 660.71875190734863);
    ctx.fillText("20",45, 595.71875190734863);
    ctx.fillText("30",45, 530.71875190734863);
    ctx.fillText("40",45, 465.71875190734863);
    ctx.fillText("50",45, 400.71875190734863);
    ctx.fillText("60",45, 335.71875190734863);
    ctx.fillText("70",45, 270.71875190734863);
    ctx.fillText("80",45, 205.71875190734863);
    ctx.fillText("90",45, 140.71875190734863);
    ctx.fillText("100",38, 75.718751907348633);

    ctx.fillText("PSI",  7.5, 388.71875190734863);


    
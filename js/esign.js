/**
 * @file
 * Supporting file for the esign module.
 */

(function ($) {
  Backdrop.behaviors.esign = {
    attach: function (context, settings) {
      activateEsign();
    },
    detach: function (context, settings) {
      activateEsign();
    }
  };

  $(document).ready(function () {
    activateEsign();
  });

  function activateEsign() {
    $('.esign_container').each(function () {
      var thisContainer = $(this);
      var settings = JSON.parse(thisContainer.attr('data-settings'));
      var signatureCapture = thisContainer.find('.signature-storage');
      var canvas = thisContainer.find('canvas')[0];

      // Ensure high-DPI canvas resizing
      function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
      }

      // Initialize Signature Pad
      var signaturePad = new SignaturePad(canvas, settings);

      // Hook into new 4.x event system
      signaturePad.addEventListener("endStroke", function () {
        signatureCapture.val(signaturePad.toDataURL(settings.toDataURL || 'image/png'));
        thisContainer.find('.esign_panel').attr("data-signature", signaturePad.toDataURL(settings.toDataURL || 'image/png'));
        thisContainer.find('.signature-created').val(Math.ceil(Date.now() / 1000));
      });

      // Add the "clear" button if not already added
      thisContainer.find('.esign_panel .clear-container').remove();
      thisContainer.find('.esign_panel').append(
        '<div class="clear-container"><br/><a href="#" class="clear">' + Backdrop.t('Clear Signature') + '</a></div>'
      );

      // Clear button logic
      thisContainer.find('.esign_panel .clear').click(function (e) {
        e.preventDefault();
        signaturePad.clear();
        signatureCapture.val("");
        thisContainer.find('.esign_panel').attr('data-signature', '');
        resizeCanvas(); // Re-resize after clearing
      });

      // Initial canvas resize
      resizeCanvas();

      // Re-resize on orientation change
      $(window).on('orientationchange', resizeCanvas);
    });
  }

  function resizeCanvas(canvas, signaturePad, signatureCapture, settings) {
    // When zoomed out to less than 100%, for some very strange reason,
    // some browsers report devicePixelRatio as less than 1
    // and only part of the canvas is cleared then.
    if (!signaturePad.isEmpty()) {
      signatureCapture.val(signaturePad.toDataURL(settings.toDataURL));
    }
    var ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    if (signatureCapture.val()) {
      signaturePad.fromDataURL(decodeURIComponent(signatureCapture.val()));
    }
  }

  $(window).resize(function () {
    // resizeCanvas(canvas, signaturePad, signatureCapture)
  });

})(jQuery);

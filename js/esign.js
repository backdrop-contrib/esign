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

      function resizeCanvas() {
        const ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext('2d').scale(ratio, ratio);
      }

      // Initialize SignaturePad
      var signaturePad = new SignaturePad(canvas, settings);

      // Resize the canvas first
      resizeCanvas();

      // Restore signature from hidden field if present
      var savedDataURL = signatureCapture.val();
      if (savedDataURL && signaturePad.isEmpty()) {
        try {
          signaturePad.fromDataURL(savedDataURL);
        } catch (e) {
          console.warn('Could not restore signature from storage:', e);
        }
      }

      // Save signature on stroke
      signaturePad.addEventListener("endStroke", function () {
        var dataURL = signaturePad.toDataURL(settings.toDataURL || 'image/png');
        signatureCapture.val(dataURL);
        thisContainer.find('.esign_panel').attr("data-signature", dataURL);
        thisContainer.find('.signature-created').val(Math.ceil(Date.now() / 1000));
      });

      // Add clear functionality
      thisContainer.find('.esign_panel .clear-container').remove();
      thisContainer.find('.esign_panel').append(
        '<div class="clear-container"><br/><a href="#" class="clear">' + Backdrop.t('Clear Signature') + '</a></div>'
      );

      thisContainer.find('.esign_panel .clear').click(function (e) {
        e.preventDefault();
        signaturePad.clear();
        signatureCapture.val('');
        thisContainer.find('.esign_panel').attr('data-signature', '');
        resizeCanvas();
      });

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

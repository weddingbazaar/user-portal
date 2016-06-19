from django.db import models
# local flavour address installation reference -http://django-localflavor.readthedocs.io/en/latest/#installation
# local flavour india reference for form fields - http://django-localflavor.readthedocs.io/en/latest/localflavor/in_/


class VendorInfo(models.Model):
    # combine first name & last name for owner
    first_name = models.CharField(max_length=1024)
    last_name = models.CharField(max_length=1024)

    address = models.CharField(max_length=2048)
    # available in local flavours
    city = models.CharField("city", max_length=64, default="New Delhi")
    # available in local flavours
    state = models.CharField("state", default="Delhi")
    # available in local flavours
    zipcode = models.CharField("zip code", max_length=6, default="110001")
    # Use validators for phone numbers
    phone1 = models.IntegerField(max_length=10)
    phone2 = models.IntegerField(max_length=10,  blank=True)
    phone3 = models.IntegerField(max_length=10,  blank=True)
    review_choices = (
        ('1', 'bad'),
        ('2', 'average'),
        ('3', 'good'),
        ('4', 'very good'),
        ('5', 'excellent'),
    )
    # to calculate overall average of above choices input by different users
    avg_review = ()
    category = (
        ('Apparels', (
            ('boutique', 'Boutique'),
            ('fashiondesigner', 'Fashion Designer'),
            ('groomwear', 'Groom Wear'),
            ('lehengasaree', 'Lehenga Saree'),
            ('lingerie', 'Lingerie'),
            ('jewellery', 'Jewellery'),
        ),
         'Astro', (
             ('astrologer', 'Astrologer'),
             ('pundit', 'Pundit'),
             ('temple', 'Temple'),
         ),
         'Grooming', (
             ('beautyparlour', 'Beauty Parlour'),
             ('dietnutritionist ', 'Dietitian & Nutritionist'),
             ('gym', 'Gym'),
             ('makeup', 'Makeup Artist'),
             ('mehendi', 'Mehendi'),
             ('nailartist', 'Nail Artist'),
             ('spa', 'Spa'),
         ),
         'Events', (
             ('eventmanagement', 'Event Management'),
             ('liveperformer', 'Live Performer'),
             ('weddingplanner', 'Wedding Planner'),
         ),
         'Transport', (
             ('luxurycar', 'Luxury Car Rent'),
             ('taxi', 'Taxi'),
             ('travelagent', 'Travel Agent'),

         ),
         'Venue', (
             ('banquets', 'Banquets'),
             ('farmhouse', 'Farm House'),
             ('hotel', 'Hotel'),
             ('tenthouse', 'Tent House'),
         ),
         'MusicBand', (
             ('band', 'Band'),
             ('choreo', 'Choreographer'),
             ('disco', 'Disco'),
             ('dj', 'DJ'),
             ('singer', 'Singer'),
         ),
         'Services', (
             ('caterers', 'Caterers'),
             ('confec-choco', 'Confectionery & Chocolates'),
             ('fireworks', 'Fireworks'),
             ('florists', 'Florists'),
             ('invitationcard', 'Invitation Card'),
             ('loan', 'Wedding Loan'),
             ('maidservent', 'Maids & Servants'),
             ('photographer', 'Photographer'),
             ('gift', 'Wedding Gifts'),
             ('accessories', 'Wedding Accessories'),
         ),
         'Agents', (
             ('detective', ''),
             ('matrimonialagent', 'Matrimonial Agent'),
             ('cookinginstructor', 'Cooking Instructor'),
         ),
        )
    )
    website = models.CharField(max_length=300, blank=True)

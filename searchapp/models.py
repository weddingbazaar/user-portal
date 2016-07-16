from django.db import models
from django.contrib.auth.models import User


# local flavour address installation reference -http://django-localflavor.readthedocs.io/en/latest/#installation
# local flavour india reference for form fields - http://django-localflavor.readthedocs.io/en/latest/localflavor/in_/


class VendorInfo(models.Model):
    user = models.ForeignKey(
        User,
        null=True,
        on_delete=models.CASCADE,
    )
    business_name = models.CharField(max_length=1024, default='Test')
    # combine first name & last name for owner
    first_name = models.CharField(max_length=1024)
    last_name = models.CharField(max_length=1024)

    address = models.CharField(max_length=2048)
    # available in local flavours
    city = models.CharField("city", max_length=64, default="New Delhi")
    # available in local flavours
    state = models.CharField("state", max_length=68, default="Delhi")
    # available in local flavours
    zipcode = models.CharField("zip code", max_length=6, default="110001")
    # Use validators for phone numbers
    phone1 = models.IntegerField()
    phone2 = models.IntegerField(blank=True, null=True)
    phone3 = models.IntegerField(blank=True, null=True)
    review_choices = (
        ('1', 'bad'),
        ('2', 'average'),
        ('3', 'good'),
        ('4', 'very good'),
        ('5', 'excellent'),
    )

    # to calculate overall average of above choices input by different users
    avg_review = models.FloatField(max_length=3, default=0)

    categ = (('Apparels', 'Apparels'),
             ('Astro', 'Astro'),
             ('Grooming', 'Grooming'),
             ('Events', 'Events'),
             ('Transport', 'Transport'),
             ('Venue', 'Venue'),
             ('MusicBand', 'MusicBand'),
             ('Services', 'Services'),
             ('Agents', 'Agents'))

    # category = models.CharField(
    #     max_length=15,
    #     choices=categ,
    #     default='Apparels',
    # )

    website = models.CharField(max_length=300, blank=True)


class Category(models.Model):
    # all the subcategories
    subcateg = (
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
             ('diet ', 'Dietitian & Nutritionist'),
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
             ('confectionery', 'Confectionery & Chocolates'),
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
             ('detective', 'Detective'),
             ('matrimonialagent', 'Matrimonial Agent'),
             ('cookinginstructor', 'Cooking Instructor'),
         ),
         )
    )

    # link to the vendorinfo table
    vendor = models.ForeignKey(
        'VendorInfo',
        on_delete=models.CASCADE,
    )

    # link to the user table
    # can be null by default || has to be changed later
    user = models.ForeignKey(
        User,
        null=True,
        on_delete=models.CASCADE,
    )

    boutique = models.BooleanField()
    fashiondesigner = models.BooleanField()
    groomwear = models.BooleanField()
    lehengasaree = models.BooleanField()
    lingerie = models.BooleanField()
    jewellery = models.BooleanField()
    astrologer = models.BooleanField()
    pundit = models.BooleanField()
    temple = models.BooleanField()
    beautyparlour = models.BooleanField()
    diet = models.BooleanField()
    gym = models.BooleanField()
    makeup = models.BooleanField()
    mehendi = models.BooleanField()
    nailartist = models.BooleanField()
    spa = models.BooleanField()
    eventmanagement = models.BooleanField()
    liveperformer = models.BooleanField()
    weddingplanner = models.BooleanField()
    luxurycar = models.BooleanField()
    taxi = models.BooleanField()
    tenthouse = models.BooleanField()
    banquets = models.BooleanField()
    farmhouse = models.BooleanField()
    hotel = models.BooleanField()
    travelagent = models.BooleanField()
    band = models.BooleanField()
    choreo = models.BooleanField()
    disco = models.BooleanField()
    dj = models.BooleanField()
    singer = models.BooleanField()
    caterers = models.BooleanField()
    confectionery = models.BooleanField()
    fireworks = models.BooleanField()
    invitationcard = models.BooleanField()
    florists = models.BooleanField()
    loan = models.BooleanField()
    maidservent = models.BooleanField()
    photographer = models.BooleanField()
    gift = models.BooleanField()
    accessories = models.BooleanField()
    detective = models.BooleanField()
    matrimonialagent = models.BooleanField()
    cookinginstructor = models.BooleanField()

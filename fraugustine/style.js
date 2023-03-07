const furt = document.querySelector('.furt')
const ham = document.querySelector('.hambuger')
const nav = document.querySelector('.bug')
const nas = document.querySelector('.bar')

furt.addEventListener('click', () => {
    nav.classList.toggle('active')
    furt.classList.toggle( "gutr")
    nas.classList.toggle( "frr")
    ham.classList.toggle( "bgyf")
})

const month = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
] 

const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]



const reading = [
    {
        just: 'Sunday',
        color : 'Purple',
        feast : 'Saturday after Ash Wednesday ',
        verse1 : 'Gn 2:7-9; 3:1-7',
        pread1 : ` The LORD God formed man out of the clay of the ground
        and blew into his nostrils the breath of life,
        and so man became a living being.
        
        Then the LORD God planted a garden in Eden, in the east,
        and placed there the man whom he had formed.
        Out of the ground the LORD God made various trees grow
        that were delightful to look at and good for food,
        with the tree of life in the middle of the garden
        and the tree of the knowledge of good and evil.
        
        Now the serpent was the most cunning of all the animals
        that the LORD God had made.
        The serpent asked the woman,
        "Did God really tell you not to eat
        from any of the trees in the garden?"
        The woman answered the serpent:
        "We may eat of the fruit of the trees in the garden;
        it is only about the fruit of the tree
        in the middle of the garden that God said,
        'You shall not eat it or even touch it, lest you die.'"
        But the serpent said to the woman:
        "You certainly will not die!
        No, God knows well that the moment you eat of it
        your eyes will be opened and you will be like gods
        who know what is good and what is evil."
        The woman saw that the tree was good for food,
        pleasing to the eyes, and desirable for gaining wisdom.
        So she took some of its fruit and ate it;
        and she also gave some to her husband, who was with her,
        and he ate it.
        Then the eyes of both of them were opened,
        and they realized that they were naked;
        so they sewed fig leaves together
        and made loincloths for themselves.`,
        resp: "R. (cf. 3a) Be merciful, O Lord, for we have sinned.",
        words: `Have mercy on me, O God, in your goodness;
        in the greatness of your compassion wipe out my offense.
        Thoroughly wash me from my guilt
        and of my sin cleanse me.<span class="resp">R.</span> <br> For I acknowledge my offense,
        and my sin is before me always:
        "Against you only have I sinned,
        and done what is evil in your sight."<span class="resp">R.</span> <br> A clean heart create for me, O God,
        and a steadfast spirit renew within me.
        Cast me not out from your presence,
        and your Holy Spirit take not from me.<span class="resp">R.</span> <br>Give me back the joy of your salvation,
        and a willing spirit sustain in me.
        O Lord, open my lips,
        and my mouth shall proclaim your praise. <span class="resp">R.</span>`,
        pread2 : `Brothers and sisters:
        Through one man sin entered the world,
        and through sin, death,
        and thus death came to all men, inasmuch as all sinned—
        for up to the time of the law, sin was in the world,
        though sin is not accounted when there is no law.
        But death reigned from Adam to Moses,
        even over those who did not sin
        after the pattern of the trespass of Adam,
        who is the type of the one who was to come.
        But the gift is not like the transgression.
        For if by the transgression of the one, the many died,
        how much more did the grace of God
        and the gracious gift of the one man Jesus Christ
        overflow for the many.
        And the gift is not like the result of the one who sinned.
        For after one sin there was the judgment that brought condemnation;
        but the gift, after many transgressions, brought acquittal.
        For if, by the transgression of the one,
        death came to reign through that one,
        how much more will those who receive the abundance of grace
        and of the gift of justification
        come to reign in life through the one Jesus Christ.
        In conclusion, just as through one transgression
        condemnation came upon all,
        so, through one righteous act,
        acquittal and life came to all.
        For just as through the disobedience of the one man
        the many were made sinners,
        so, through the obedience of the one,
        the many will be made righteous.`,
        acc: `One does not live on bread alone,
        but on every word that comes forth from the mouth of God.`,
        pread3:`At that time Jesus was led by the Spirit into the desert
        to be tempted by the devil.
        He fasted for forty days and forty nights,
        and afterwards he was hungry.
        The tempter approached and said to him,
        "If you are the Son of God,
        command that these stones become loaves of bread."
        He said in reply,
        "It is written:
        One does not live on bread alone,
        but on every word that comes forth
        from the mouth of God."
        
        Then the devil took him to the holy city,
        and made him stand on the parapet of the temple,
        and said to him, "If you are the Son of God, throw yourself down.
        For it is written:
        He will command his angels concerning you
        and with their hands they will support you,
        lest you dash your foot against a stone."
        Jesus answered him,
        "Again it is written,
        You shall not put the Lord, your God, to the test."
        Then the devil took him up to a very high mountain,
        and showed him all the kingdoms of the world in their magnificence,
        and he said to him, "All these I shall give to you,
        if you will prostrate yourself and worship me."
        At this, Jesus said to him,
        "Get away, Satan!
        It is written:
        The Lord, your God, shall you worship
        and him alone shall you serve."
        
        Then the devil left him and, behold,
        angels came and ministered to him.`,
        verse2 : 'Rom 5:12-19',
        verse3 : 'Mt 4:1-11',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: "Second Reading ",
        pos3: "Gospel Reading",
    },{
        just: 'Monday',
        color : 'Purple',
        feast : 'Monday of the First Week of Lent',
        verse1 : 'Lv 19:1-2, 11-18',
        pread1 : `The LORD said to Moses,
        "Speak to the whole assembly of the children of Israel and tell them:
        Be holy, for I, the LORD, your God, am holy.
        
        "You shall not steal.
        You shall not lie or speak falsely to one another.
        You shall not swear falsely by my name,
        thus profaning the name of your God.
        I am the LORD.
        
        "You shall not defraud or rob your neighbor.
        You shall not withhold overnight the wages of your day laborer.
        You shall not curse the deaf,
        or put a stumbling block in front of the blind,
        but you shall fear your God.
        I am the LORD.
        
        "You shall not act dishonestly in rendering judgment.
        Show neither partiality to the weak nor deference to the mighty,
        but judge your fellow men justly.
        You shall not go about spreading slander among your kin;
        nor shall you stand by idly when your neighbor's life is at stake.
        I am the LORD.
        
        "You shall not bear hatred for your brother in your heart.
        Though you may have to reprove him,
        do not incur sin because of him.
        Take no revenge and cherish no grudge against your fellow countrymen.
        You shall love your neighbor as yourself.
        I am the LORD."`,
        resp: "R. (John 6:63b) Your words, Lord, are Spirit and life.",
        words: `The law of the LORD is perfect,
        refreshing the soul.
        The decree of the LORD is trustworthy,
        giving wisdom to the simple.<span class="resp">R.</span> <br>The precepts of the LORD are right,
        rejoicing the heart.
        The command of the LORD is clear,
        enlightening the eye.
        <span class="resp">R.</span> <br>The fear of the LORD is pure,
        enduring forever;
        The ordinances of the LORD are true,
        all of them just.<span class="resp">R.</span><br>Let the words of my mouth and the thought of my heart
        find favor before you,
        O LORD, my rock and my redeemer.<span class="resp">R.</span>`,
        pread2 : ' ',
        acc: `Behold, now is a very acceptable time;
        behold, now is the day of salvation.`,
        pread3:`The law of the LORD is perfect,
        refreshing the soul.
        The decree of the LORD is trustworthy,
        giving wisdom to the simple.
        R. Your words, Lord, are Spirit and life.
        The precepts of the LORD are right,
        rejoicing the heart.
        The command of the LORD is clear,
        enlightening the eye.
        R. Your words, Lord, are Spirit and life.
        The fear of the LORD is pure,
        enduring forever;
        The ordinances of the LORD are true,
        all of them just.
        R. Your words, Lord, are Spirit and life.
        Let the words of my mouth and the thought of my heart
        find favor before you,
        O LORD, my rock and my redeemer.
        R. Your words, Lord, are Spirit and life.
        
        Verse Before the Gospel
        2 Cor 6:2b
        Behold, now is a very acceptable time;
        behold, now is the day of salvation.
        
        Gospel
        Mt 25:31-46
        Jesus said to his disciples:
        "When the Son of Man comes in his glory,
        and all the angels with him,
        he will sit upon his glorious throne,
        and all the nations will be assembled before him.
        And he will separate them one from another,
        as a shepherd separates the sheep from the goats.
        He will place the sheep on his right and the goats on his left.
        Then the king will say to those on his right,
        'Come, you who are blessed by my Father.
        Inherit the kingdom prepared for you from the foundation of the world.
        For I was hungry and you gave me food,
        I was thirsty and you gave me drink,
        a stranger and you welcomed me,
        naked and you clothed me,
        ill and you cared for me,
        in prison and you visited me.'
        Then the righteous will answer him and say,
        'Lord, when did we see you hungry and feed you,
        or thirsty and give you drink?
        When did we see you a stranger and welcome you,
        or naked and clothe you?
        When did we see you ill or in prison, and visit you?'
        And the king will say to them in reply,
        'Amen, I say to you, whatever you did
        for one of these least brothers of mine, you did for me.'
        Then he will say to those on his left,
        'Depart from me, you accursed,
        into the eternal fire prepared for the Devil and his angels.
        For I was hungry and you gave me no food,
        I was thirsty and you gave me no drink,
        a stranger and you gave me no welcome,
        naked and you gave me no clothing,
        ill and in prison, and you did not care for me.'
        Then they will answer and say,
        'Lord, when did we see you hungry or thirsty
        or a stranger or naked or ill or in prison,
        and not minister to your needs?'
        He will answer them, 'Amen, I say to you,
        what you did not do for one of these least ones,
        you did not do for me.'
        And these will go off to eternal punishment,
        but the righteous to eternal life."`,
        verse2 : '',
        verse3 : 'Mt 25:31-46',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: " ",
        pos3: "Gospel Reading",
    },{
        just: 'Tuesday',
        color : 'Purple',
        feast : 'Tuesday of the First Week of Lent ',
        verse1 : 'Is 55:10-11',
        pread1 : `Thus says the LORD:
        Just as from the heavens
        the rain and snow come down
        And do not return there
        till they have watered the earth,
        making it fertile and fruitful,
        Giving seed to the one who sows
        and bread to the one who eats,
        So shall my word be
        that goes forth from my mouth;
        It shall not return to me void,
        but shall do my will,
        achieving the end for which I sent it.`,
        resp: " From all their distress God rescues the just.",
        words: `Glorify the LORD with me,
        let us together extol his name.
        I sought the LORD, and he answered me
        and delivered me from all my fears. <span class="resp">R.</span> <br> Look to him that you may be radiant with joy,
        and your faces may not blush with shame.
        When the poor one called out, the LORD heard,
        and from all his distress he saved him.<span class="resp">R.</span> <br> The LORD has eyes for the just,
        and ears for their cry.
        The LORD confronts the evildoers,
        to destroy remembrance of them from the earth.<span class="resp">R.</span><br> When the just cry out, the LORD hears them,
        and from all their distress he rescues them.
        The LORD is close to the brokenhearted;
        and those who are crushed in spirit he saves.<span class="resp">R.</span>`,
        pread2 : ' ',
        acc: `One does not live on bread alone,
        but on every word that comes forth from the mouth of God.`,
        pread3:`Jesus said to his disciples:
        "In praying, do not babble like the pagans,
        who think that they will be heard because of their many words.
        Do not be like them.
        Your Father knows what you need before you ask him.
        
        "This is how you are to pray:
        
        Our Father who art in heaven,
        hallowed be thy name,
        thy Kingdom come,
        thy will be done,
        on earth as it is in heaven.
        Give us this day our daily bread;
        and forgive us our trespasses,
        as we forgive those who trespass against us;
        and lead us not into temptation,
        but deliver us from evil.
        
        "If you forgive men their transgressions,
        your heavenly Father will forgive you.
        But if you do not forgive men,
        neither will your Father forgive your transgressions."
        
        `,
        verse2 : '',
        verse3 : 'Mt 6:7-15',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: " ",
        pos3: "Gospel Reading",
    },{
        just: 'Wednesday',
        color : 'Purple',
        feast : 'Wednesday of the First Week in Lent',
        verse1 : 'Jon 3:1-10',
        pread1 : `The word of the LORD came to Jonah a second time:
        ""Set out for the great city of Nineveh,
        and announce to it the message that I will tell you.""
        So Jonah made ready and went to Nineveh,
        according to the LORD's bidding.
        Now Nineveh was an enormously large city;
        it took three days to go through it.
        Jonah began his journey through the city,
        and had gone but a single day's walk announcing,
        ""Forty days more and Nineveh shall be destroyed,""
        when the people of Nineveh believed God;
        they proclaimed a fast
        and all of them, great and small, put on sackcloth.
        
        When the news reached the king of Nineveh,
        he rose from his throne, laid aside his robe,
        covered himself with sackcloth, and sat in the ashes.
        Then he had this proclaimed throughout Nineveh,
        by decree of the king and his nobles:
        ""Neither man nor beast, neither cattle nor sheep,
        shall taste anything;
        they shall not eat, nor shall they drink water.
        Man and beast shall be covered with sackcloth and call loudly to God;
        every man shall turn from his evil way
        and from the violence he has in hand.
        Who knows, God may relent and forgive, and withhold his blazing wrath,
        so that we shall not perish.""
        When God saw by their actions how they turned from their evil way,
        he repented of the evil that he had threatened to do to them;
        he did not carry it out.`,
        resp: "R. (19b) A heart contrite and humbled, O God, you will not spurn.",
        words: `Have mercy on me, O God, in your goodness;
        in the greatness of your compassion wipe out my offense.
        Thoroughly wash me from my guilt
        and of my sin cleanse me.<span class="resp">R.</span> <br> A clean heart create for me, O God,
        and a steadfast spirit renew within me.
        Cast me not out from your presence,
        and your Holy Spirit take not from me.<span class="resp">R.</span> <br> For you are not pleased with sacrifices;
        should I offer a burnt offering, you would not accept it.
        My sacrifice, O God, is a contrite spirit;
        a heart contrite and humbled, O God, you will not spurn.<span class="resp">R.</span>`,
        pread2 : ' ',
        acc: `Even now, says the LORD,
        return to me with your whole heart
        for I am gracious and merciful.`,
        pread3:`While still more people gathered in the crowd, Jesus said to them,
        "This generation is an evil generation;
        it seeks a sign, but no sign will be given it,
        except the sign of Jonah.
        Just as Jonah became a sign to the Ninevites,
        so will the Son of Man be to this generation.
        At the judgment
        the queen of the south will rise with the men of this generation
        and she will condemn them,
        because she came from the ends of the earth
        to hear the wisdom of Solomon,
        and there is something greater than Solomon here.
        At the judgment the men of Nineveh will arise with this generation
        and condemn it,
        because at the preaching of Jonah they repented,
        and there is something greater than Jonah here."`,
        verse2 : '',
        verse3 : 'Lk 11:29-32',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: " ",
        pos3: "Gospel Reading",
    },{
        just: 'Thursday',
        color : 'Purple',
        feast : 'Thursday of the First Week in Lent',
        verse1 : 'Est C:12, 14-16, 23-25',
        pread1 : `Queen Esther, seized with mortal anguish,
        had recourse to the LORD.
        She lay prostrate upon the ground, together with her handmaids,
        from morning until evening, and said:
        "God of Abraham, God of Isaac, and God of Jacob, blessed are you.
        Help me, who am alone and have no help but you,
        for I am taking my life in my hand.
        As a child I used to hear from the books of my forefathers
        that you, O LORD, always free those who are pleasing to you.
        Now help me, who am alone and have no one but you,
        O LORD, my God.
        
        "And now, come to help me, an orphan.
        Put in my mouth persuasive words in the presence of the lion
        and turn his heart to hatred for our enemy,
        so that he and those who are in league with him may perish.
        Save us from the hand of our enemies;
        turn our mourning into gladness
        and our sorrows into wholeness."`,
        resp: "R. (3a)  Lord, on the day I called for help, you answered me.",
        words: `I will give thanks to you, O LORD, with all my heart,
        for you have heard the words of my mouth;
        in the presence of the angels I will sing your praise;
        I will worship at your holy temple
        and give thanks to your name.<span class="resp">R.</span> <br>Because of your kindness and your truth;
        for you have made great above all things
        your name and your promise.
        When I called, you answered me;
        you built up strength within me.<span class="resp">R.</span> <br> Your right hand saves me.
        The LORD will complete what he has done for me;
        your kindness, O LORD, endures forever;
        forsake not the work of your hands.<span class="resp">R.</span>`,
        pread2 : ' ',
        acc: `A clean heart create for me, O God;
        give me back the  joy of your salvation.`,
        pread3:`Jesus said to his disciples:
        "Ask and it will be given to you;
        seek and you will find;
        knock and the door will be opened to you.
        For everyone who asks, receives; and the one who seeks, finds;
        and to the one who knocks, the door will be opened.
        Which one of you would hand his son a stone
        when he asked for a loaf of bread,
        or a snake when he asked for a fish?
        If you then, who are wicked,
        know how to give good gifts to your children,
        how much more will your heavenly Father give good things
        to those who ask him.
        
        "Do to others whatever you would have them do to you.
        This is the law and the prophets."`,
        verse2 : '',
        verse3 : 'Mt 7:7-12',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: " ",
        pos3: "Gospel Reading",
    },{
        just: 'Friday',
        color : 'Purple',
        feast : 'Friday of the First Week of Lent',
        verse1 : 'Ez 18:21-28',
        pread1 : `Thus says the Lord GOD:
        If the wicked man turns away from all the sins he committed, 
            if he keeps all my statutes and does what is right and just,
            he shall surely live, he shall not die. 
        None of the crimes he committed shall be remembered against him;
            he shall live because of the virtue he has practiced. 
        Do I indeed derive any pleasure from the death of the wicked?
            says the Lord GOD. 
        Do I not rather rejoice when he turns from his evil way
            that he may live?
        
        And if the virtuous man turns from the path of virtue to do evil,
            the same kind of abominable things that the wicked man does,
            can he do this and still live?
        None of his virtuous deeds shall be remembered,
            because he has broken faith and committed sin;
            because of this, he shall die. 
        You say, “The LORDs way is not fair!” 
        Hear now, house of Israel:
            Is it my way that is unfair, or rather, are not your ways unfair?
        When someone virtuous turns away from virtue to commit iniquity, and dies,
            it is because of the iniquity he committed that he must die.
        But if the wicked, turning from the wickedness he has committed,
            does what is right and just,
            he shall preserve his life;
            since he has turned away from all the sins that he committed, 
            he shall surely live, he shall not die.`,
        resp: "R.    (3) If you, O Lord, mark iniquities, who can stand?",
        words: `Out of the depths I cry to you, O LORD;
        LORD, hear my voice!
    Let your ears be attentive
        to my voice in supplication.<span class="resp">R.</span> <br> If you, O LORD, mark iniquities,
        LORD, who can stand?
    But with you is forgiveness,
        that you may be revered. <span class="resp">R.</span> <br> I trust in the LORD;
        my soul trusts in his word.
    My soul waits for the LORD
        more than sentinels wait for the dawn.
        Let Israel wait for the LORD.<span class="resp">R.</span><br> For with the LORD is kindness
        and with him is plenteous redemption;
    And he will redeem Israel
        from all their iniquities.<span class="resp">R.</span>`,
        pread2 : ' ',
        acc: `Cast away from you all the crimes you have committed, says the LORD,
        and make for yourselves a new heart and a new spirit.`,
        pread3:`Jesus said to his disciples: 
        “I tell you, 
        unless your righteousness surpasses that
        of the scribes and Pharisees,
        you will not enter into the Kingdom of heaven.
        
        “You have heard that it was said to your ancestors,
        You shall not kill; and whoever kills will be liable to judgment.
        But I say to you, whoever is angry with his brother
        will be liable to judgment,
        and whoever says to his brother, Raqa, 
        will be answerable to the Sanhedrin,
        and whoever says, You fool, will be liable to fiery Gehenna.
        Therefore, if you bring your gift to the altar,
        and there recall that your brother
        has anything against you,
        leave your gift there at the altar,
        go first and be reconciled with your brother,
        and then come and offer your gift.
        Settle with your opponent quickly while on the way to court.
        Otherwise your opponent will hand you over to the judge,
        and the judge will hand you over to the guard,
        and you will be thrown into prison.
        Amen, I say to you,
        you will not be released until you have paid the last penny.”`,
        verse2 : '',
        verse3 : 'Mt 5:20-26',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: " ",
        pos3: "Gospel Reading",
    }, {
        just: 'Saturday',
        color : 'Purple',
        feast : 'Saturday after Ash Wednesday ',
        verse1 : 'Is 58:9b-14',
        pread1 : 'Thus says the LORD:If you remove from your midst oppression,false accusation and malicious speech; If you bestow your bread on the hungry and satisfy the afflicted; Then light shall rise for you in the darkness, and the gloom shall become for you like midday; Then the LORD will guide you always and give you plenty even on the parched land, He will renew your strength, and you shall be like a watered garden, like a spring whose water never fails. The ancient ruins shall be rebuilt for your sake, and the foundations from ages past you shall raise up; ""Repairer of the breach,"" they shall call you, ""Restorer of ruined homesteads."" If you hold back your foot on the sabbath from following your own pursuits on my holy day; If you call the sabbath a delight, and the LORDs holy day honorable; If you honor it by not following your ways, seeking your own interests, or speaking with malice-- Then you shall delight in the LORD, and I will make you ride on the heights of the earth; I will nourish you with the heritage of Jacob, your father, for the mouth of the LORD has spoken.',
        resp: "R. (11ab)  Teach me your way, O Lord, that I may walk in your truth.",
        words: 'Incline your ear, O LORD; answer me, for I am afflicted and poor. Keep my life, for I am devoted to you; save your servant who trusts in you. You are my God. <span class="resp">R.</span> <br> Have mercy on me, O Lord,for to you I call all the day.Gladden the soul of your servant,for to you, O Lord, I lift up my soul.<span class="resp">R.</span> <br> For you, O Lord, are good and forgiving,abounding in kindness to all who call upon you.Hearken, O LORD, to my prayer and attend to the sound of my pleading..<span class="resp">R.</span>',
        pread2 : ' ',
        acc: `I take no pleasure in the death of the wicked man, says the Lord, but rather in his conversion, that he may live.`,
        pread3:`Jesus saw a tax collector named Levi sitting at the customs post.He said to him, "Follow me."And leaving everything behind, he got up and followed him.Then Levi gave a great banquet for him in his house,and a large crowd of tax collectorsand others were at table with them.The Pharisees and their scribes complained to his disciples, saying,"Why do you eat and drink with tax collectors and sinners?"Jesus said to them in reply,"Those who are healthy do not need a physician, but the sick do.
        I have not come to call the righteous to repentance but sinners.`,
        verse2 : '',
        verse3 : 'Lk 5:27-32',
        homily : ' I have not come to call the righteous to repentance but sinners.',
        pos1: "First Reading",
        pos2: " ",
        pos3: "Gospel Reading",
    }
]

window.addEventListener('DOMContentLoaded', function(){
    clone ()
})

const keyys = document.querySelector('.mapped')
const toy = document.querySelector('.tday')



let current = new Date()

let tday = current.getDay()
let dat = current.getDate()
let tmonth = current.getMonth()
let tyear = current.getFullYear()

toy.innerText = day[tday] + ' ' + month[tmonth] +" "+ tyear;

const filt = reading[tday];
// const jut = document.getElementById('switch')

// const mage = [
//     '<img src="/main.png" alt="Father Augustine"></img>',
//     '<img src="/sub.png" alt="Father Augustine"></img>'
// ]


// function swut (){
//     jut.innerHTML = mage[1]
// }

// setInterval( swut, 2000)


function clone (){
    let ray = `<div class="read">
            <div class="head">
                <div class="tday">
                    ${dat+' ' +  day[tday] + ' ' + month[tmonth] +" "+ tyear}
                </div>
                <div class="feast">
                    <div style="color:${filt.color} ;" class="color">${filt.color}</div><div class="st">${filt.feast}</div>
                </div>
            </div>
            <div class="readings">
                <div class="first">
                <span class="positon">${filt.pos1}</span>
                <span class="book">${filt.verse1}</span>
                <p class="preading">${filt.pread1}</p>
                </div>

                <div class='psalm'>
                <div class="terd">Responsoral Psalm</div>
                <div class="response">${filt.resp}</div>
                <div class="acc">${filt.words}

                <div class="second">
                <span class="positon">${filt.pos2}</span>
                <span class="book">${filt.verse2}</span>
                <p  class="preading"> ${filt.pread2}</p>
                </div>
                <div class="alle">
                <div class="terd">Gospel Acclamation</div>
                <div class="acc">${filt.acc}</div>
                </div>
                <div class="gospel">
                <span class="positon">${filt.pos2}</span>
                <span class="book">${filt.verse3}</span>
                <p class="preading">${filt.pread3}</p>
                </div>
                
            <div class="homily">
            <span class="positon">Reflection</span>
            <p class="preading">${filt.homily}</p>
        </div>
            </div>
        </div>`
        keyys.innerHTML = ray;
}

// let color = document.querySelector('.color')
// let tcolor = reading[tday].color.toLowerCase()
// color.style.color = tcolor